module.exports = {
    name: 'condition',
    description: 'condition!',
    execute(message, args) {
        // const winner = message.guild.members.cache.random().user;
        message.channel.send(`Les Conditions d'utilisation et la Politique ont été mises à jour.

**Les mises à jours clés** apportent d'avantage de contrôle sur tout propos pouvant discriminer tout être humains ou autre.

En restant sur ${message.guild.name}, vous acceptez les nouvelles **Conditions**, qui entreront en vigueur le *15 Août 2021*. Après cette date, il vous faudra vous y faire pour les nouvelles Conditions pour continuer a utiliser ${message.guild.name}.`);
    },
};
