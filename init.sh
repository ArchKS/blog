#!/bin/bash
file_name="README.md"
file_name_bak="README.md.bak"
prev_category="";


# generate README.md
echo "\`\`\`text" > $file_name
tree -N -L 2 | grep -Ev 'img|files|init|README' >> $file_name
echo "\`\`\`" >> $file_name
cp $file_name $file_name_bak

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
    fi
  fi
done < $file_name_bak

rm -f $file_name_bak
rm -f ./.init.sh.un~


git add .
msg='zendu   '`date "+%Y-%m-%d %H:%M:%S"`;
git commit -m "${msg}"
git push 

