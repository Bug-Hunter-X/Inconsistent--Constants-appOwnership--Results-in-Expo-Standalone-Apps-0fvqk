# Inconsistent `Constants.appOwnership` Results in Expo Standalone Apps

This repository demonstrates a bug in Expo's `Constants.appOwnership` API. The API sometimes incorrectly reports that an app is running in a managed workflow even when it is clearly running in standalone mode. This leads to conditional logic errors within the application.

## Bug Reproduction

1. Clone this repository.
2. Install the dependencies using `npm install`.
3. Run the app using `expo start`.
4. Observe the output in the console.  The output should consistently report whether the app is running in a managed or standalone workflow. However, the bug causes inconsistencies in the reported status.

## Proposed Solution

The proposed solution uses a more reliable method to determine the app's runtime environment. We bypass `Constants.appOwnership` and employ a combination of environment variables and the presence of specific files/directories associated with the Expo build process. This approach adds a layer of robustness and consistency to the workflow determination.

## Contributing

Contributions are welcome!  Please submit a pull request if you have any improvements or additional insights into this issue.
