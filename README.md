# Journal App

## .env template

In the root directory of the project create the .env file with the following configuration as a minimum. These environment variables are used to configure Firebase environment ➜ [src/firebase/config.js](https://github.com/Kevin-Jose-Sandoval/journal-app/blob/develop/src/firebase/config.js).

```sh
# FIREBASE
VITE_API_KEY = "<YOUR_API_KEY>"
VITE_AUTH_DOMAIN = "<YOUR_AUTH_DOMAIN>"
VITE_PROJECT_ID = "<YOUR_PROJECT_ID>"
VITE_STORAGE_BUCKET = "<YOUR_STORAGE_BUCKET>"
VITE_MESSAGING_SENDER_ID = "<YOUR_MESSAGING_SENDER_ID>"
VITE_APP_ID = "<YOUR_APP_ID>"

# CLOUDINARY
VITE_CLOUD_URL = 'https://api.cloudinary.com/v1_1/<YOUR_CLOUD_NAME>/upload'
```

## Firebase configuration
