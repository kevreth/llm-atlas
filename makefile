
SRC := src/icons.html
DST := dist/icons.html

all: $(DST)

$(DST): $(SRC) icons/*
	mkdir dist/
	node inline_svg.js $(SRC) $(DST)

clean:
	rm -f dist/
