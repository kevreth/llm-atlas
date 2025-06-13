
SRC := src/index.html
DST := dist/index.html

all: $(DST)

$(DST): $(SRC) icons/*
	mkdir -p dist/
	node inline_svg.js $(SRC) $(DST)

clean:
	rm -f dist/
