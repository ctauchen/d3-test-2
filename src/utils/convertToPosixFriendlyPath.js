import { sep as pathSep, posix as pathPosix } from 'path';

function convertToPosixFriendlyPath(maybeWindowsPath) {
  return maybeWindowsPath.split(pathSep).join(pathPosix.sep);
}

export default convertToPosixFriendlyPath;
