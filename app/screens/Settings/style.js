import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  settingsItems: {
    padding: 10,
  },
  itemContainer: {
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    margin: 5,
  },
  itemIcon: {
    paddingEnd: 10,
  },

  itemText: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  itemDetails: {},
  actionButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  actionButtons: {
    alignItems: 'center',
  },
  actionButtonsText: {
    fontSize: 18,
  },
  actionBorder: {
    borderRightWidth: 1,
  },
  copyrightInfo: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  copyrightInfoText: {
    fontSize: 32,
  },
});
