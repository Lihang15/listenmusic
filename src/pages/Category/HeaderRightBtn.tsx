import {RootState} from '@/models/all-models';
import React from 'react';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import {connect, ConnectedProps} from 'react-redux';

const mapStateToProps = ({category}: RootState) => {
  return {isEdit: category.isEdit};
};

const connector = connect(mapStateToProps);
type ModelState = ConnectedProps<typeof connector>;

interface Iprops extends ModelState {
  onSubmit: () => void;
}
class HeaderRightBtn extends React.Component<Iprops> {
  render() {
    const {onSubmit, isEdit} = this.props;
    return (
      <HeaderButtons>
        <Item title={isEdit ? '完成' : '编辑'} onPress={onSubmit} />
      </HeaderButtons>
    );
  }
}

export default connector(HeaderRightBtn);
