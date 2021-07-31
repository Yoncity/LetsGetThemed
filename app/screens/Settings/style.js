import {StyleSheet} from 'react-native';

export default (colors) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryBackground
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
    borderBottomColor: colors.secondaryBackground,
    borderBottomColor: colors.borderColor
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
    color: colors.text.title
  },
  itemDetails: {
    color: colors.text.subtitle
  },
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
    color: colors.text.title
  },
  actionBorder: {
    borderRightWidth: 1,
    borderRightColor: colors.borderColor
  },
  copyrightInfo: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  copyrightInfoText: {
    fontSize: 32,
    color: colors.text.subtitle
  },
});
