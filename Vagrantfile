# -*- mode: ruby -*-
# vi: set ft=ruby :

$script = <<SCRIPT
echo I am provisioning...
date > /etc/vagrant_provisioned_at
SCRIPT

Vagrant.configure("2") do |config|
  config.vm.provision "shell", inline: $script

  config.vm.define "webclient" do |container| 
    container.vm.box = "ubuntu/trusty64"
    container.vm.box_url = "https://atlas.hashicorp.com/ubuntu/boxes/trusty64"
    container.vm.host_name = "webclientapp"
    
    container.vm.synced_folder ".", "/mnt/bootstrap/webclient", :create => true
    container.vm.provision "docker" do |d|
        d.build_image "/mnt/bootstrap/webclient",
            args: "-t my-cloud-client"
        d.run "my-cloud-client", 
            args: "-d -p 3000:3000"
    end
    
    container.vm.network "forwarded_port", guest: 3000, host: 3000
    container.vm.network "private_network", ip: "192.168.205.100"
  end
  
end
