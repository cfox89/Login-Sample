Ext.define('Login.controller.Register', {
     extend: 'Ext.app.Controller',
     config: {
          refs: {
              registerView: 'registerview',
              homeView: 'homeview'
            // mainView: 'mainview'
          },

          control: {
             registerView: {
                registerCommand: 'onRegisterCommand'
            },

           // mainView: {
             homeView: {
                registerOffCommand: 'onRegisterOffCommand'
            }
        }
    },
          
        // Session token

    sessionToken: null,

    // Transitions
    getSlideLeftTransition: function () {
        return { type: 'slide', direction: 'left' };
    },

    getSlideRightTransition: function () {
        return { type: 'slide', direction: 'right' };
    },

    onRegisterCommand: function (view, firstname, lastname, username, email, password, dateofbirth) {
        console.log('Firstname: ' + firstname + '\n' + 'Lastname: ' + lastname + '\n' +
        'Username: ' + username + '\n' + 'Email: ' + email + '\n' + 'Password: ' + password + '\n' + 'Dateofbirth: ' + dateofbirth);

        var me = this,
            registerView = me.getRegisterView();

        if (firstname.length === 0 || lastname.length === 0 || username.length === 0 || email.length === 0 || dateofbirth.length === 0) {
            Ext.Msg.alert('', 'Please enter the required details');
        }
    },

    signInSuccess: function () {
        console.log('Successfully registered.');
        var registerView = this.getRegisterView();
       // mainView = this.getMainView();
        loginView = this.getLoginView();
        registerView.setMasked(false);

        Ext.Viewport.animateActiveItem(loginView, this.getSlideLeftTransition());
    },

    singInFailure: function (message) {
        var registerView = this.getRegisterView();
        registerView.showSignInFailedMessage(message);
        registerView.setMasked(false);
    },

    onSignOffCommand: function () {

        var me = this;

        Ext.Ajax.request({
            url: '../../services/logoff.ashx',
            method: 'post',
            params: {
                sessionToken: me.sessionToken
            },
            success: function (response) {

                // TODO: You need to handle this condition.
            },
            failure: function (response) {

                // TODO: You need to handle this condition.
            }
        });

        Ext.Viewport.animateActiveItem(this.getRegisterView(), this.getSlideRightTransition());
    }
});