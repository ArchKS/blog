#!/bin/bash
# 2021-08-26 modify in iPhone
file_name="README.md"
file_name_bak="README.md.bak"
prev_category="";

export https_proxy=127.0.0.1:7776
export http_proxy=127.0.0.1:7776


# generate README.md
echo "\`\`\`text" > $file_name
tree -N -L 2 | grep -Ev 'img|init|README' >> $file_name
echo "\`\`\`" >> $file_name
cp $file_name $file_name_bak
rm $file_name

while read line;do
  if [[ -n `echo "$line" | grep '\.md'` ]];then
    suffix=`echo "$line" | awk -F '[「」]' '{print $2}'`
    fname=`echo "$line"  | grep -Eo '「.*md$'`
    path="./${suffix}/${fname}"
    construct="[${fname}](${path})"

    if [[ "$prev_category" != "$suffix" ]];then
      echo "# ${suffix}" >> $file_name;
      prev_category=$suffix;
    fi

    if [[ -n $fname ]];then
      echo "${construct}" >> $file_name
      echo "" >> $file_name
    fi
  fi
done < $file_name_bak

rm -f $file_name_bak
rm -f ./.init.sh.un~


git add .
msg='zendu   '`date "+%Y-%m-%d %H:%M:%S"`;
git commit -m "${msg}"
git push 


export https_proxy=
export http_proxy=


