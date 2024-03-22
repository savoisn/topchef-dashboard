#!/run/current-system/sw/bin/bash
mkdir -p $1-test
cp $1/*.png $1-test/

cd $1

for file in *.png
do
    mv ${file} bg-${file}
    convert -resize 50% bg-${file} md-${file}
    convert -resize 25% bg-${file} sm-${file}
done


