# zv-getconfig
Get configuration file and load values.

#### Basic Usage
```
const config = require( 'zv-getconfig' )();
```
The above code loads configurations specified in the ***.env*** file in the project's root directory.

To load configurations from a custom file, specify its path as an argument, e.g.
```
const config = require( 'zv-getconfig' )( PATH_TO_CUSTOM_CONFIG_FILE );
```

Configurations will now be loaded as *key-value* pairs in the **config** object. To access configurations, e.g. 

- .env
```
DATABASE_USERE=user
DATABASE_PASSWORD=secretkey
```

```
console.log( config.DATABASE_USER, config.DATABASE_PASSWORD );
```
 > // outputs *user secretkey*
