export const fileUpload = async (file) => {
  if (!file) throw new Error('The file does not exist')

  const cloudUrl = import.meta.env.VITE_CLOUD_URL
  const formData = new FormData()
  formData.append('upload_preset', 'react-journal')
  formData.append('file', file)

  try {
    const res = await fetch(cloudUrl, {
      method: 'POST',
      body: formData,
    })

    if (!res.ok) throw new Error('Error to upload image')

    const cloudRes = await res.json()
    return cloudRes.secure_url
  } catch (error) {
    throw new Error(error.message)
  }
}
