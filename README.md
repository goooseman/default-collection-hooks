# Meteor Default Collection Hooks

Assings `createdAt`, `createdBy`, `modifiedAt`, `modifiedBy` attributes to any collection in one line of code.

## Getting Started

Installation:

```
meteor add goooseman:default-collection-hooks
```

### Usage

```
var test = new Mongo.Collection("test");

test.defaultCollectionHooks(opts);
```

### Options

`opts` is an object with the following options:

- `createdAt` (default: `true`): create a `createdAt` field with current date on object create
- `createdBy` (default: `true`): create a `createdBy` field with userId on object create (if there is any)
- `modifiedAt` (default: `true`): create a `modifiedAt` field with current date on object update
- `modifiedBy` (defulat: `true`): create a `modifiedBy` field with userId on object update (if there is any)

If you do not pass a options object, it will use the defaults. You can pass only the options you want to modify.

### Examples

```
var test = new Mongo.Collection("test");

test.defaultCollectionHooks();
```
Will create `createdAt`, `createdBy` on object create and `modifiedAt`, `modifiedBy` attributes on object update.


```
var test = new Mongo.Collection("test");

test.defaultCollectionHooks({
  modifiedAt: false,
  modifiedBy: false
});
```

Will create `createdAt`, `createdBy` on object create, and do nothing on object update.