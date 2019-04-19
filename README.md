# HEPIC Pub-Sub API for Voipmonitor Sniffer RTP + CDRs

This application implements a sample HEP Pub-Sub API Interface on top of the Voipmonitor OSS Sniffer, allowing HEPIC UI to interact with CDRs and RTP-PCAP-Audio recording remotely.

![hep-voipmonitor](https://user-images.githubusercontent.com/1423657/56446644-1c759e00-6304-11e9-95ec-58e0e816f35d.png)

## Docker Example
```
docker-compose up -d
```
```
docker run --name voipmonitor --cap-add=NET_ADMIN --network=host -d qxip/voipmonitor-hep
```

