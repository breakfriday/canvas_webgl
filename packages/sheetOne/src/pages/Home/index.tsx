import Guide from '@/components/Guide';
import Konva from "konva"

const Home = () => {
  return <Guide />;
};


var stage = new Konva.Stage({
  container: 'container',
  width: 500,
  height: 500
});

// Create a new Konva layer
var layer = new Konva.Layer();
stage.add(layer);

// Create a new Konva group to hold the table
var table = new Konva.Group();
layer.add(table);

// Add the table cells
for (var row = 0; row < 2; row++) {
  for (var col = 0; col < 2; col++) {
    var cell = new Konva.Rect({
      x: col * 250,
      y: row * 250,
      width: 250,
      height: 250,
      stroke: 'black',
      strokeWidth: 2
    });
    table.add(cell);
  }
}

// Add some text to the cells
var cellText = new Konva.Text({
  x: 10,
  y: 10,
  text: 'Cell 1',
  fontSize: 24,
  fontFamily: 'Arial',
  fill: 'black'
});
table.add(cellText);

cellText = new Konva.Text({
  x: 260,
  y: 10,
  text: 'Cell 2',
  fontSize: 24,
  fontFamily: 'Arial',
  fill: 'black'
});
table.add(cellText);

cellText = new Konva.Text({
  x: 10,
  y: 260,
  text: 'Cell 3',
  fontSize: 24,
  fontFamily: 'Arial',
  fill: 'black'
});
table.add(cellText);

cellText = new Konva.Text({
  x: 260,
  y: 260,
  text: 'Cell 4',
  fontSize: 24,
  fontFamily: 'Arial',
  fill: 'black'
});
table.add(cellText);


export default Home;
