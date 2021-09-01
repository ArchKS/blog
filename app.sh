
export https_proxy=127.0.0.1:7776
export http_proxy=127.0.0.1:7776


# 判断当前目录
# 遍历目录下的文章

dirs=`ls -d */ | sed "s#/##g"`
fileCount=0
fileName="README.md"
rm -f $fileName

entry(){
  echo $1
  echo $1 >> $fileName;
  echo "" >> $fileName;
}

dateTime=`date "+%Y-%m-%d %H:%M:%S"`

for dir in ${dirs};
do
  entry "## ${dir}" 
  mks=`ls ${dir}/*.md`
  for mk in ${mks};
  do
    name=`echo $mk | awk -F '[」.]' '{print $2}'`
    path=$mk
    link="[$name](./${path})"
    entry $link
    let fileCount++
  done
  entry " "
  entry " "
done

entry "> Last Update Zendu ${dateTime}"
entry "> Total Articles ${fileCount}"
rm -f .*\.un~
rm .DS_Store

# push to github
echo "\n"
git add .
msg='zendu   '`date "+%Y-%m-%d %H:%M:%S"` 
git commit -m "${msg}"
git push

export https_proxy=
export http_proxy=
