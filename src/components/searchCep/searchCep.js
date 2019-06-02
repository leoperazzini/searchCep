import React from "react";
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  ImageBackground
} from "react-native";

import { View } from "native-base";

import { getCEP, setListViewDisplayed } from "../../actions/formAction";

import { IconButton, ActivityIndicator, Text } from "react-native-paper";

import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

const { width, height } = Dimensions.get("window");

class searchCep extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const searchInputStyle = {
      container: {
        backgroundColor: "#ECECEC",
        width: width - 30,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 50,
        marginBottom: 0,
        opacity: 0.9,
        borderRadius: 10,
        elevation: 10,
        shadowOffset: { width: 5, height: 5 },
        shadowColor: "black",
        shadowOpacity: 1.0
      },
      description: {
        fontWeight: "bold",
        color: "black",
        borderTopWidth: 0,
        borderBottomWidth: 0,
        opacity: 0.9
      },
      listView: {
        backgroundColor: "#ffffff",
        elevation: 1
      },
      predefinedPlacesDescription: {
        color: "#fff"
      },
      textInputContainer: {
        height: 50,
        backgroundColor: "#fff",
        borderRadius: 10
      },
      textInput: {
        height: 33,
        fontSize: 16
      }
    };

    const styles = StyleSheet.create({
      searchBox: {
        top: 0,
        position: "absolute",
        flex: 1,
        justifyContent: "center"
      }
    });

    return (
      <View style={styles.searchBox}>
        <GooglePlacesAutocomplete
          placeholder="Buscar endereço"
          minLength={2} // minimum length of text to search
          autoFocus={false}
          listViewDisplayed={this.props.display} // true/false/undefined
          fetchDetails={true}
          textInputProps={{
            onChangeText: text => {
              //this.props.setAdressAutoComplete(null, null, "");
              this.props.setListViewDisplayed("auto");
            },
            onFocus: () => {
              this.props.setListViewDisplayed("auto");
            }
          }}
          onPress={(data, details = null) => {
            let latAdress = details.geometry.location.lat;
            let lngAdress = details.geometry.location.lng;

            this.props.getCEP(latAdress, lngAdress);

            this.props.setListViewDisplayed("false");

            //this.props.setAdressAutoComplete(latAdress, lngAdress, "");

            //this.props.getCentralizarAdressComplete();
          }}
          getDefaultValue={() => ""}
          query={{
            // available options: https://developers.google.com/places/web-service/autocomplete
            key: "AIzaSyD7-u2fXJQ58t_8qswX1ZssssE_N9fE7IQ",
            language: "pt-BR" // language of the results,
            //types: "(regions)" // default: 'geocode'
          }}
          styles={searchInputStyle}
          nearbyPlacesAPI="GooglePlacesSearch" // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
          GoogleReverseGeocodingQuery={
            {
              // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
            }
          }
          GooglePlacesSearchQuery={{
            // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
            rankby: "distance",
            types: "food"
          }}
          filterReverseGeocodingByTypes={[
            "postal_code",
            "locality",
            "administrative_area_level_3"
          ]} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
          debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
          renderLeftButton={() => (
            <View style={{ borderRightWidth: 0 }}>
              <IconButton
                icon="menu"
                color="black"
                size={35}
                onPress={() => this.props.navigation.openDrawer()}
              />
            </View>
          )}
        />
        <Text />
        <Text />
        <Text />
        <Text />
        <Text />

        <View style={{ justifyContent: "center", alignItems: "center" }}>
          {this.props.cep != "" && (
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontWeight: "bold", fontSize: 20 }}>CEP: </Text>
              <Text style={{ fontSize: 20 }}>{this.props.cep}</Text>
            </View>
          )}
          <Text />
          {this.props.formatted_address != "" && (
            <Text style={{ fontSize: 13, textAlign: "center" }}>
              {this.props.formatted_address}
            </Text>
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    //alignItems: 'center',
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end"
  },
  Content: {
    height: height,
    width: width
  }
});

const mapStateToProps = state => ({
  cep: state.userReducer.cep,
  formatted_address: state.userReducer.formatted_address,
  display: state.userReducer.display
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getCEP, setListViewDisplayed }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(searchCep);
