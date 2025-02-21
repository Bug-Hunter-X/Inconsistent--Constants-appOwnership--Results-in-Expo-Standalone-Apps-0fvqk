The unreliable `Constants.appOwnership` API is replaced with a more robust check that examines both the environment variables (EAS_BUILD_ID, for example) and the presence of specific files typical of an Expo managed workflow build (like the `.eas-build` directory). This ensures a more consistent and accurate determination of the app's runtime environment.

```javascript
import * as FileSystem from 'expo-file-system';

const isManagedWorkflow = async () => {
  const hasEasBuildId = !!process.env.EAS_BUILD_ID;
  const easBuildDirExists = await FileSystem.getInfoAsync('./.eas-build').then(()=>true).catch(()=>false);
  return hasEasBuildId || easBuildDirExists;
};

(async () => {
  const managed = await isManagedWorkflow();
  console.log('Running in managed workflow:', managed);
})();
```