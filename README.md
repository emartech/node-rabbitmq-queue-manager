# @emartech/rabbitmq-queue-manager

#### queueWorker(workerId, options)

Starts a new worker with the given worker id.

To set required keys in the options, set `requiredKeys` in the worker's configuration as an array. 


### Example

```javascript
const queueManager = require('@emartech/rabbitmq-queue-manager').create();

class MyWorker {

  async run() {
    queueManager.queueWorker('NextWorker', { newVar: 'foo' });
  }

}
```

## Configuration

`@emartech/rabbitmq-queue-manager` uses [`node-config`](https://www.npmjs.com/package/config) `package for configuration.

### Required configuration example
```json
{
  "RabbitMQ": "rabbitmq://connection",
  "Workers": {
    "NextWorker": {
      "requiredKeys": ["newVar"]
    }
  }
}
```
