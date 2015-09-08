# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure(2) do |config|
  config.vm.box = "ubuntu/trusty64"
  config.vm.network "forwarded_port", guest: 3000, host: 3000

  config.vm.provision "shell", privileged: false, inline: <<-SHELL
     sudo apt-get update
     sudo apt-get install -y build-essential curl
     curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.26.1/install.sh | bash
     source ~/.nvm/nvm.sh
     nvm install node
     nvm alias default node

     cd /vagrant
     npm install
     npm install -g nodemon

     sudo apt-get install -y ruby
     sudo gem install foreman
     sudo foreman export upstart /etc/init -a nodejs -u vagrant -p 3000
     sudo service nodejs start
  SHELL
end
