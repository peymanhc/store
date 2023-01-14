
// Grabbed Sample API key from https://web-push-codelab.glitch.me/
const applicationServerPublicKey = 'BAGvbXo3JHBXKy9UPLf8P1o5Ie2qMY44wghY4PkpkLkiDWJYw1_823aPC3F_KIu2fP2BuWSWfMaSRRV48Qs5ZFM';

let isSubscribed = false;
let swRegistration = null;

const urlB64ToUint8Array = (base64String) => {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding)
    .replace(/-/g, '+')
    .replace(/_/g, '/');

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
};

// Update User Push Notification Subscription on Server
const updateSubscriptionOnServer = (subscription) => {
  if (subscription) {
    console.log('User subscribed successfully --- ', JSON.stringify(subscription));
  } else {
    console.log('Failed to subscribe --- ', JSON.stringify(subscription));
  }
};

// Subscribe User for Push Notifications
const subscribeUser = () => {
  const applicationServerKey = urlB64ToUint8Array(applicationServerPublicKey);
  swRegistration.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey,
  })
    .then((subscription) => {
      console.log('[Push Messaging] user is subscribed.');
      updateSubscriptionOnServer(subscription);
      isSubscribed = true;
    })
    .catch((err) => {
      console.log('[Push Messaging] user failed to subscribe ', err);
    });
};

// Initiate User Push Notification
const initPushNotifications = () => {
  swRegistration.pushManager.getSubscription()
    .then((subscription) => {
      isSubscribed = !(subscription === null);
      if (isSubscribed) {
        console.log('[Push Messaging] user is subscribed.');
      } else {
        console.log('[Push Messaging] user is not subscribed.');
        subscribeUser();
      }
    });
};

module.exports = function () {
if ('serviceWorker' in navigator) {
  let swUrl = `${process.env.PUBLIC_URL}/sw.js`;
  window.addEventListener('load', () => {
    navigator.serviceWorker.register(swUrl).then((swReg) => {
      console.log('[Service Worker] registration successful with scope: ', swReg);
      swRegistration = swReg;

      if ('PushManager' in window) {
        initPushNotifications();
      } else {
        console.log('[Push Messaging] not supported');
      }
    }, (err) => {
      console.log('[Service Worker] registration failed: ', err);
    }).catch((err) => {
      console.log(err);
    });
  });
} else {
  console.log('[Service Worker] not supported');
}
}