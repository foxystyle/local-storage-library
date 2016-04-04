# Local storage library

A lightweight library with methods related to local storage.

## Install

There are two recommended ways to install this library.

### bower

1. Go to your project directory and run this command in terminal:

  ```
  $ bower install local-storage-library
  ```

2. Include `localstorage.min.js` in your project and you are ready to go!

### npm

1. Go to your project directory and run this command in terminal:

  ```
  $ npm install local-storage-library
  ```

2. Include `localstorage.min.js` in your project and you are ready to go!

## Configuration

Default object name is `$ls`

You can rename it using terminal:

```
$ cd path/to/directory
$ ruby rename.rb
```

First input should be current name, (default is `$ls`) and the second input should be a new name. Recommended usage of `$` prefix when naming library object.

**Note:** This script requires Ruby to be installed on your machine. *(recommended ruby version >= 2.2.1)*

## Methods

### get

Returns value paired with specified key

```
ls.get(key)
```

### set

Sets or updates a value for specified key

```
ls.set(key, value)
```

### isSet

Returns true if value is set, false otherwise

```
ls.isSet(key)
```

### remove

Removes item paired with specified key

```
ls.remove(key)
```
