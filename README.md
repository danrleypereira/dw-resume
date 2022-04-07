## connect to heroku
heroku ps:exec --app=appname

## add domain to heroku
heroku domains:add www.danrleypereira.com.br --app=dw-resume
heroku domains:wait 'www.danrleypereira.com.br' --app=dw-resume
