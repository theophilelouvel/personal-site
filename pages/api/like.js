import { previewClient } from 'lib/sanity'

export default async function like(req, res) {
  const { id } = JSON.parse(req.body)
  try {
    await previewClient
      .patch(id)
      .inc({ likes: 1 })
      .commit()
  } catch (err) {
    console.error(err)
  }
}
