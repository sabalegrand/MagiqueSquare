import expect from 'expect';
import TestUtils from 'react-addons-test-utils';

import { MagiqueSquare } from 'MagiqueSquare';
import { TileContainer } from 'TileContainer';


describe('MagiqueSquare', function() {
  it('should exist', function() {
    expect(MagiqueSquare).toExist();
  });

  it('should contain a tile container', function() {
    const magiqueSquare = TestUtils.renderIntoDocument(<MagiqueSquare />);
    const tileContainer = TestUtils.scryRenderedComponentsWithType(magiqueSquare, TileContainer);

    expect(tileContainer.length).toEqual(1);
  });
});
