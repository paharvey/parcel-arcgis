import WebMap from '@arcgis/core/WebMap';
import MapView from '@arcgis/core/views/MapView';

new MapView({
  container: 'root',
  map: new WebMap({
    portalItem: {
      id: '974c6641665a42bf8a57da08e607bb6f'
    }
  })
});
