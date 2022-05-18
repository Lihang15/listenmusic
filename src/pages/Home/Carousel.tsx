import {RootState} from '@/models/all-models';
import React from 'react';
import {StyleSheet, Image, View} from 'react-native';
import SnapCarousel, {Pagination} from 'react-native-snap-carousel';
import {connect, ConnectedProps} from 'react-redux';
import {viewportWidth, widthPercentage, heightPercentage} from '../../utils/';

// export const carouselData = [
//   {
//     image: require('../../assets/images/carousel/gm.png'),
//     colors: ['pink', 'pink'],
//   },
//   {
//     image: require('../../assets/images/carousel/jl1.png'),
//     colors: ['pink', 'white'],
//   },
//   {
//     image: require('../../assets/images/carousel/jl.png'),
//     colors: ['white', 'pink'],
//   },
//   {
//     image: require('../../assets/images/carousel/iu.png'),
//     colors: ['pink', 'pink'],
//   },
//   {
//     image: require('../../assets/images/carousel/gw.png'),
//     colors: ['pink', 'white'],
//   },
// ];

const sliderWidth = viewportWidth;
export const sideheight = heightPercentage(18);
const itemWidth = widthPercentage(94);

const mapStateToProps = ({home}: RootState) => {
  return {
    activeCarouselIndex: home.activeCarouselIndex,
    carouselData: home.carousel,
  };
};
const connector = connect(mapStateToProps);
type ModelState = ConnectedProps<typeof connector>;

class Carousel extends React.PureComponent<ModelState> {
  componentDidMount() {
    this.fetch();
  }
  fetch = () => {
    const {dispatch} = this.props;
    dispatch({
      type: 'home/fetchCarousel',
    });
  };
  renderItem = ({item}: {item: any}) => {
    return <Image source={{uri: item.image}} style={styles.image} />;
  };
  onSnapToItem = (index: number) => {
    // this.setState({activeIndex: index});
    const {dispatch} = this.props;
    dispatch({
      type: 'home/setState',
      payload: {
        activeCarouselIndex: index,
      },
    });
  };

  render() {
    const {activeCarouselIndex, carouselData} = this.props;
    return (
      <View>
        <SnapCarousel
          data={carouselData}
          renderItem={this.renderItem}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          loop
          autoplay
          onSnapToItem={this.onSnapToItem}
        />

        <View style={styles.paginationWrapper}>
          <Pagination
            containerStyle={styles.paginationContainer}
            dotContainerStyle={styles.dotContainer}
            dotStyle={styles.dot}
            activeDotIndex={activeCarouselIndex}
            dotsLength={carouselData.length}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  image: {
    width: itemWidth,
    height: sideheight,
    borderRadius: 8,
  },
  paginationWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  paginationContainer: {
    position: 'absolute',
    top: -20,
    paddingHorizontal: 3,
    paddingVertical: 4,
    borderRadius: 8,
  },
  dotContainer: {
    marginHorizontal: 6,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: 'rgba(255,255,255,0.92)',
  },
});
export default connector(Carousel);
