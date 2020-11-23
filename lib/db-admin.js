import firebase from 'lib/firebase-admin'

export async function getAllBlogs(author) {
    try {
        const snapshot = await firebase
            .collection('blogs')
            .where('author', '==', author)
            .get()

        const blogs = []

        snapshot.forEach((doc) => {
            blogs.push({ id: doc.id, ...doc.data() })
        })

        return { blogs }
    } catch (error) {
        return { error }
    }
}