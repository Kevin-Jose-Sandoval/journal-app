# Journal App

<div style='display: flex; flex-direction: column; gap: 30px;justify-content:center;align-items:"center"'>
    <div>
    <h2>Login page</h2>
    <img src='https://res.cloudinary.com/kevinsandoval/image/upload/v1670116942/journal/login_a7w7sv.png' style='border-radius: 20px;width: 600px;'/>
    </div>
    <div>
    <h2>Register page</h2>
    <img src='https://res.cloudinary.com/kevinsandoval/image/upload/v1670116934/journal/register_accpsh.png' style='border-radius: 20px;width: 600px;'/>
    </div>
    <div>
    <h2>Note Workout</h2>
    <img src='https://res.cloudinary.com/kevinsandoval/image/upload/v1670116934/journal/note-workout_qtztkz.png' style='border-radius: 20px;width: 600px;'/>
    </div>
    <div>
    <h2>Note study</h2>
    <img src='https://res.cloudinary.com/kevinsandoval/image/upload/v1670116933/journal/note-study_r4ih4i.png' style='border-radius: 20px;width: 600px;'/>
    </div>

</div>

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
