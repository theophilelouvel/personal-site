---
title: Mutating an API route using SWR
description: Now with and without data revalidation
date: '2021-05-06'
updated: '2021-05-06'
cover: uQMyw1VFKqI
---

As I was playing around with the swr library for [my last project](https://feedbase.dev/) I ran into some issues trying to mutating the route's cache without actually revalidating it, since I was actually handling this logic myself. So I thought I'd share the solution here!

As a quick reminder, here's how to use swr in the first place, just in case:

```js:index.js
import useSwr from "swr"

const fetcher = (...args) => fetch(...args).then(res => res.json())

const { data, error } = useSwr("api/people", fetcher)
```

We can also pass options to the `useSwr()` function in order to avoid revalidating data when not necessary.


```js:index.js
... = useSwr("api/people", fetcher, { revalidateOnFocus: false })
```

You can learn more about options [on the swr website](https://swr.vercel.app/docs/options).

### Revalidate

Revalidating with swr is a simple as writing:

```js:index.js
import { mutate } from "swr"

mutate("api/people")
```

This will revalidate the cache swr has for this route, making it available for all mounted components currently using it.

The inconvenient is, this is kind of a waste of ressources most of the time, because it can lead to duplicate API calls... for nothing.

The alternative is to update the cache programmatically on the client side.

### Optimistic UI

Let's say this API route returns an array of strings, like names for instance. We want to handle the logic of adding or removing someone from the array on the client side ourselves, separating it from the server-side logic. This allows us to make snappier interface, a pattern known as optimistic UI, since we're updating the user interface instantly, with the possibility of rolling it back to its previous state if something went wrong.

To do so, we can pass a function to swr to manipulate the cash "in place", so to speak:

```js:index.js
import { mutate } from "swr"

mutate("api/people", async data => [...data, name], false)
```

Here we destructure the initial array stored in cache and return a new array with name added.

We also pass the `false` key in order to let swr know that we do not want to revalidate this data: Again, that logic is on us. You could for instance mutate the data, send a POST request, wait for a 201 from the database server, and eventually roll back the pre-mutation data to the UI if we got some error code.

### Promise chaining

An alternative that I prefer is to show the user a loading UI state, then mutate the route in place once we got the success code response from the server. I think it's best to wait a second and know if something went wrong than thinking something worked when it didn't. But that's just a matter of personal preference, of course. Whatever floats your boat, right? ¯\_(ツ)_/¯

For instance, we could envision something like this:

```js:index.js
import { mutate } from "swr"

// Firebase returns documents id, useful for the keys in React!
someClientSideFirebaseFunction(name)
	.then(({id}) => mutate("api/people", async data => [...data, name], false))
	.catch(err => console.log(err))
```

Or with a `try catch` statement:

```js:index.js
import { mutate } from "swr"

const getTheMeaningOfLife = async name => {
	try {
		const { id } = someClientSideFirebaseFunction(name)
		mutate("api/people", async data => [...data, name], false)
	} catch (err) {
		console.log(err)
	}
}
```

Again, pick your poison.

### Caveat

I ran into one issue working with swr, which is that of several functions using `mutate` in the same component, only the first one was working. I haven't looked at the source code for swr, but my guess would be that under the hood it uses some kind of polymorphism under the hood, but for some reason only the first call gets resolved. However, in another project I was able to make everything work just fine so that might just be me.

In any case, the solution I came up with was to create a wrapper function arounf this mutate call so that we can reuse it as many times as we'd like, like so:

```js:index.js
import { mutate } from "swr"

const mutateAPI = fn => mutate("api/hello", async data => fn(data), false)

someClientSideFirebaseFunction(name)
	.then(({id}) => mutateAPI(data => [...data, name]))
	.catch(err => console.log(err))

otherClientSideFirebaseFunction(name)
	.then(({id}) => mutateAPI(data => data.slice(0, data.length - 1)))
	.catch(err => console.log(err))
```

Now we only need to pass a function to our wrapper, which has the nice side effect of reducing boilerplate code.

And just like that, all components using the API route with that key will be updated programmagically ✨

That's it, thanks for reading!