#!/run/current-system/sw/bin/bash
mkdir -p $1-bkp
cp $1/*.png $1-bkp/

cd $1

for file in *.png
do
    mv ${file} bg-${file}
    convert -resize 50% bg-${file} md-${file}
    convert -resize 25% bg-${file} sm-${file}
done


