const mqtt = require('mqtt');
const axios = require('axios');
const urlencode = require('urlencode');

class MqttWhatsappAccessory {
  constructor(log, config) {
    this.log = log;
    this.name = config.name;
    this.server = config.server;
    this.port = config.port;
    this.user = config.user;
    this.password = config.password;
    this.mqttTopic = config.mqttTopic;
    this.phoneNumber = config.telNumber;
    this.apiKey = config.apiKey;
    this.apiUrl = `https://api.callmebot.com/whatsapp.php?phone=${this.phoneNumber}&apikey=${this.apiKey}&text=`;

    const mqttOptions = {
      host: this.server,
      port: this.port,
      username: this.user,
      password: this.password
    };

    this.client = mqtt.connect(mqttOptions);

    this.client.on('connect', () => {
      this.log(`Connected to MQTT broker at ${this.server}:${this.port}`);
      this.client.subscribe(this.mqttTopic);
    });

    this.client.on('message', (topic, message) => {
      if (topic === this.mqttTopic && message.toString() === 'true') {
        this.sendWhatsappNotification('Capteur de présence activé!');
      }
    });
  }

  sendWhatsappNotification(message) {
    const url = `${this.apiUrl}${urlencode(message)}`;
    axios.get(url)
      .then(response => this.log('Message WhatsApp envoyé !'))
      .catch(error => this.log('Erreur lors de l\'envoi de WhatsApp:', error));
  }
}

module.exports = (api) => {
  api.registerAccessory('MqttWhatsappAccessory', MqttWhatsappAccessory);
};

