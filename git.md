git --help
git --version
git config --global user.name "duheychoy"
git config user.name
git config --global user.email "duheychoy@outlook.com"
mkdir first-git
cd first-git
git init
******不能ls -all----------->只能Get-ChildItem -Force
index.html
style.css
photo.png
git config --global --add safe.directory D:/git/first-git
git add index.html
git add .
git commit -m "add index.html content"

在style.css 加上
"body{
    font-size: 20px;
}"

git commit -m "add 1.txt"

