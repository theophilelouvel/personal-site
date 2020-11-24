import { firestore, storage } from 'lib/firebase-admin'

export async function getAllPosts(author) {
    try {
        const snapshot = await firestore
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

// export async function getAllImages(author) {
//     try {
//         const snapshot = await firestore
//             .collection('images')
//             .where('author', '==', author)
//             .get()

//         const images = []

//         snapshot.forEach((doc) => {
//             images.push({ id: doc.id, ...doc.data() })
//         })

//         return { images }
//     } catch (error) {
//         return { error }
//     }
// }

export async function getFullPostById(id) {
    const storageRef = storage.ref()
    const postsRef = storageRef.child('posts')
    // This is just for one post and if you don't save urls to the db just the file name
    // So I'll probably go with the db
    postRef.child(`blogs/${post.title}.md`).getDownloadURL().then(function (url) {

        // This can be downloaded directly:
        var xhr = new XMLHttpRequest();
        xhr.responseType = 'blob';
        xhr.onload = function (event) {
            var blob = xhr.response;
        };
        xhr.open('GET', url);
        xhr.send();

        // Or inserted into an <img> element:
        var img = document.getElementById('myimg');
        img.src = url;
    }).catch(function (error) {
        // Handle any errors
    });
}

// Full example here
// // Create a reference to the file we want to download
// var starsRef = storageRef.child('images/stars.jpg');

// // Get the download URL
// starsRef.getDownloadURL().then(function(url) {
//   // Insert url into an <img> tag to "download"
// }).catch(function(error) {

//   // A full list of error codes is available at
//   // https://firebase.google.com/docs/storage/web/handle-errors
//   switch (error.code) {
//     case 'storage/object-not-found':
//       // File doesn't exist
//       break;

//     case 'storage/unauthorized':
//       // User doesn't have permission to access the object
//       break;

//     case 'storage/canceled':
//       // User canceled the upload
//       break;

//     ...

//     case 'storage/unknown':
//       // Unknown error occurred, inspect the server response
//       break;
//   }
// });