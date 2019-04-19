var config = {
  backend: 'http://de3.qxip.net:8001/api/v2/agent/subscribe',
  database: {
	'host'     : 'localhost',
	'user'     : 'root',
	'password' : 'testme',
	'database' : 'voipmonitor'
  },
  service: {
	"uuid": Math.random().toString(36).substring(7),
	"host":"de4.sipcapture.io",
	"port": 18088,
	"protocol": "http",
	"path": "/get",
	"type": "rtp;cdr",
	"ttl": 300,
	"node": "test-endpoint",
	"gid": 10
  },
  "debug": true
};

module.exports = config;
