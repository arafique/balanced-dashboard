Balanced.ResetPassword = Balanced.Model.extend(Ember.Validations, {
    validations: {
        password: {
            presence: true,
            length: {
                minimum: Balanced.PASSWORD.MIN_CHARS
            },
            format: {
                with: Balanced.PASSWORD.REGEX
            }
        },
        password_confirm: {
            presence: true,
            length: {
                minimum: Balanced.PASSWORD.MIN_CHARS
            },
            format: {
                validator: function (object, attribute, value) {
                    var password = object.get('password');
                    if (value !== password) {
                        object.set('hasError', true);
                        object.get('validationErrors').add(attribute, 'invalid');
                    }
                }
            }
        }
    }
});
