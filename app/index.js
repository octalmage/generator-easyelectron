var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');

var easyelectrongenerator = yeoman.generators.Base.extend(
{
    initializing: function () 
    {
        this.pkg = require('../package.json');
    },

    prompting: function () 
    {
        var done = this.async();

        var prompts = [
            {
                name: 'appName',
                message: 'What is your apps\'s name?',
                default: 'My App'
            }
        ];

        this.prompt(prompts, function (props) 
        {
            this.appName = props.appName;
            done();
        }.bind(this));
    },


    files: function () 
    {
        var context = 
        {
            app_name: this.appName
        };
        this.template('www/_index.html', 'index.html', context);
        this.template('www/_package.json', 'package.json', context);
        this.template('www/_main.js', 'main.js', context);
    },

    end: function () 
    {

    }
});

module.exports = easyelectrongenerator;
