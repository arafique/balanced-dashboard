Balanced.UserMarketplace = Balanced.Model.extend({
    web_uri: function() {
        // have to strip off the API version
        return ENV.BALANCED.WWW + this.get('uri').substring(3);
    }.property('uri'),

    embedded_iframe_url: function() {
        return this.get('web_uri') + Balanced.MigrationUtils.embeddedQueryString();
    }.property('web_uri'),

    transactions_embedded_iframe_url: function() {
        return this.get('web_uri') + '/transactions' + Balanced.MigrationUtils.embeddedQueryString();
    }.property('web_uri'),

    accounts_embedded_iframe_uri: function() {
        return this.get('web_uri') + '/accounts' + Balanced.MigrationUtils.embeddedQueryString();
    }.property('web_uri'),

    logs_embedded_iframe_url: function() {
        return this.get('web_uri') + '/logs' + Balanced.MigrationUtils.embeddedQueryString();
    }.property('web_uri'),

    invoices_embedded_iframe_url: function() {
        return this.get('web_uri') + '/invoices' + Balanced.MigrationUtils.embeddedQueryString();
    }.property('web_uri'),

    cards_embedded_iframe_url: function() {
        return this.get('web_uri') + '/cards' + Balanced.MigrationUtils.embeddedQueryString();
    }.property('web_uri'),

    bankaccounts_embedded_iframe_url: function() {
        return this.get('web_uri') + '/bank_accounts' + Balanced.MigrationUtils.embeddedQueryString();
    }.property('web_uri'),

    production: function () {
        return this.get('uri').indexOf('TEST') === -1;
    }.property('uri')
});
