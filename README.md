# react-starter
this is my first react starter kit, made by own
I'm use yarn for environment than npm bcs it is efficcient and fast (i think)
Whats inside:
1. ESLint
2. Webpack
3. Babel
4. etc

How to use:
1. git clone 
2. cd your project
3. yarn install
4. yarn start
5. enjoy coding !

Installing fist github repo:
git config --global user.name "<yourname>"
git config --global user.email "<youremail>"
git config --global core.autocrlf false
edit (optional): git config --global --edit
  vi ~/.gitconfig
check your config: git config --list --show-origin
-----
Make a ssh key on windows/ssl
cd ~
mkdir .ssh
chmod 700 .ssh
cd .ssh
cp /mnt/c/Users/<yourname>/.ssh/id_rsa* .
chmod 600 id_rsa
chmod 644 id_rsa.pub

if you don't already hav ssh key:
ssh-keygen -t rsa -b 4096 -C "<email>" => Save the key as id_rsa in the .ssh directory in your home directory, e.g. /home/pete/.ssh/id_rsa for user pete.

cd /mnt/c/Users/<user>
$ ls -la
  
Now you can copy these files so that Windows and WSL can use the same key:
cd .ssh
cp ~/.ssh/id_rsa*.
cat ~/.ssh/id_rsa.pub
copy in the github
check identified or not: ssh -vT git@github.com
src: https://peteoshea.co.uk/setup-git-in-wsl/
=========================================================================================================

connecting to github:
git add .
create  .gitignore
git commit or git commit-m "message"
git remote add origin https://github.com/nadeetsu/react-starter.git
git remote -v
git push origin master --force
git push origin master
more: https://kbroman.org/github_tutorial/pages/init.html

