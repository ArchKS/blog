#!/bin/bash
file_name="README.md"

# generate README.md
#echo "\`\`\`text" > $file_name
tree -N -L 2 | grep -Ev 'img|files|init|README' >> $file_name
#echo "\`\`\`" >> $file_name


while read line;do
  if [[ -n `echo "$line" | grep '\.md'` ]];then
    suffix=`echo "$line" | awk -F '[「」]' '{print $2}'`
    fname=`echo "$line"  | grep -Eo '「.*md$'`
    path="./${suffix}/${fname}"
    construct="[${fname}](${path})"
    sed -i "" "s|$fname|$construct|" $file_name
    # echo "s#"$fname"#"$construct"#" 
  fi
done < $file_name

# git add .
# msg='zendu   '`date "+%Y-%m-%d %H:%M:%S"`;
# git commit -m "${msg}"
# git push 



