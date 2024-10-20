# Homebridge MQTT WhatsApp Plugin

Homebridge MQTT WhatsApp Plugin is a Homebridge accessory that allows you to monitor MQTT-based sensors and send notifications to WhatsApp using the CallMeBot API when a specified condition is met, such as the presence of an intruder or the activation of another type of sensor.

## ⚠️ Development Status

## Features

- **MQTT Integration:** Connects to an MQTT broker and subscribes to specific topics to monitor sensor data in real-time.
- **WhatsApp Notifications:** Sends instant WhatsApp messages when the sensor state changes to a specified condition (e.g., from false to true).
- **Multi-Sensor Support:** Configure multiple sensors with different topics and notification rules.

## Prerequisites

- A functioning MQTT broker and accessible topics.
- A valid API key from [CallMeBot](https://www.callmebot.com/).
- Internet connectivity to send WhatsApp messages.

## Usage


- Start Homebridge, and your accessory should be loaded if the configuration is correct.
- Monitor your sensors' MQTT topics for the specified events, triggering WhatsApp notifications upon changes.


## Installation

1. Ensure you have [Homebridge](https://homebridge.io) set up on your system.
2. Install the plugin via npm:
   ```bash
   npm install -g homebridge-mqtt-whatsapp

## Configuration

Add your sensors to the Homebridge config.json file. Include necessary details such as the MQTT broker's address, topics, and your CallMeBot API key.

```json
{
  "accessories": [
    {
      "accessory": "MqttWhatsappAccessory",
      "name": "MQTT Sensor 1",
      "server": "mqtt://broker.hivemq.com",
      "port": 1883,
      "user": "mqttuser",
      "password": "mqttpassword",
      "mqttTopic": "sensor/presence",
      "apiKey": "your-api-key",
      "telNumber": "your-phone-number"
    }
  ]
}
```

---

## References
