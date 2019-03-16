let inputData = {
    result: 'chbs_booking_status_id|4>chbs_pickup_time|08:45>chbs_pickup_date|28-03-2019>chbs_distance|12.4>chbs_coordinate|a:2:{i:0;a:3:{s:3:"lat";s:11:"-33.9318125";s:3:"lng";s:18:"151.19110190000004";s:7:"address";s:39:"60 Robey St, Mascot NSW 2020, Australia";}i:1;a:3:{s:3:"lat";s:11:"-33.8688197";s:3:"lng";s:18:"151.20929550000005";s:7:"address";s:39:"134 King St, Sydney NSW 2000, Australia";}}>chbs_price_fixed_value|40>chbs_price_initial_value|0>chbs_price_initial_tax_rate_value|10>chbs_price_distance_value|0>chbs_client_contact_detail_first_name|Alex>chbs_client_contact_detail_last_name|Richards>chbs_client_contact_detail_email_address|2alexrichards@gmail.com>chbs_client_contact_detail_phone_number|0426396406',
    'fields': 'a:6:{i:0;a:6:{s:2:"id";s:32:"AD2ABC57D02A4BC8F6B5068474BB323C";s:5:"label";s:32:"Checked-in Luggage (No. of Bags)";s:9:"mandatory";s:1:"0";s:13:"message_error";s:0:"";s:8:"panel_id";s:32:"50FA89DD0B9FD96A4361EC87E36B9BFC";s:5:"value";s:1:"2";}i:1;a:6:{s:2:"id";s:32:"17613CA208A2D78DE60A489FCDED4B98";s:5:"label";s:30:"Carry-on Luggage (No. of Bags)";s:9:"mandatory";s:1:"0";s:13:"message_error";s:0:"";s:8:"panel_id";s:32:"50FA89DD0B9FD96A4361EC87E36B9BFC";s:5:"value";s:1:"1";}i:2;a:6:{s:2:"id";s:32:"DD23779FD950358F9A98382789F5A6AF";s:5:"label";s:42:"Extra Items (E.g. Bikes/Prams/Skateboards)";s:9:"mandatory";s:1:"0";s:13:"message_error";s:0:"";s:8:"panel_id";s:32:"50FA89DD0B9FD96A4361EC87E36B9BFC";s:5:"value";s:0:"";}i:3;a:6:{s:2:"id";s:32:"0CC3D4C34BE8040F6793DB2AB08D4CA8";s:5:"label";s:17:"Wheelchair Access";s:9:"mandatory";s:1:"0";s:13:"message_error";s:0:"";s:8:"panel_id";s:32:"50FA89DD0B9FD96A4361EC87E36B9BFC";s:5:"value";s:0:"";}i:4;a:6:{s:2:"id";s:32:"D67040D436C917AA8AD71786B6B570F6";s:5:"label";s:17:"Flight/Cruise No.";s:9:"mandatory";s:1:"0";s:13:"message_error";s:0:"";s:8:"panel_id";s:32:"50FA89DD0B9FD96A4361EC87E36B9BFC";s:5:"value";s:5:"SQ242";}i:5;a:6:{s:2:"id";s:32:"CC6A734B0F1BEE86454F698A9A2416F1";s:5:"label";s:31:"Booking Company / Reference No.";s:9:"mandatory";s:1:"0";s:13:"message_error";s:0:"";s:8:"panel_id";s:32:"50FA89DD0B9FD96A4361EC87E36B9BFC";s:5:"value";s:7:"GoCatch";}}',
    extras: 'a:0:{}',
    'vehicleClass': 'economy',
    'bookingId': 12000
};
output = [{}];
var pickup = "";
var destination = "";
var notes = "";
var notesMap = new Map();
var extraFares = [];

function formatDate(date) {
    var arr = date.split("-");
    var result = "";
    if (arr.length == 3) {
        result = arr[2] + "-" + arr[1] + "-" + arr[0];
        return result;
    }
    return date;
}

function splitPickupAndDest(coordinate) {
    var coordinateArray = coordinate.split("s:3:");
    coordinateArray.splice(0, 1);
    if (coordinateArray[0].search("lat") != -1) {
        var pickupLat = coordinateArray[0].split(";s:11").pop().replace(/[:";]/g, "");
    }
    if (coordinateArray[1].search("lng") != -1) {
        var pickupLng = coordinateArray[1].split(";s:18").pop().split(";s:")[0].replace(/[:";]/g, "");
    }
    if (coordinateArray[2] != null) {
        if (coordinateArray[2].search("lat") != -1) {
            var destLat = coordinateArray[2].split(";s:11").pop().replace(/[:";]/g, "");
        }
        if (coordinateArray[3].search("lng") != -1) {
            var destLng = coordinateArray[3].split(";s:18").pop().split(";s:")[0].replace(/[:";]/g, "");
        }
        destination = destLat.concat(",").concat(destLng);
    }
    pickup = pickupLat.concat(",").concat(pickupLng);
}

function calculateFare(distance, distance_value, tax_rate, initial_value, extraFares, duration, duration_rate, fixed_fare) {
    var extraFare = 0;
    var fare = 0;
    console.log(extraFares.length);
    for (i = 0; i < extraFares.length; i++) {
        extraFare = extraFare + (extraFares[i] - 0);
    }
    console.log(extraFare);
    extraFare *= 100;
    if (fixed_fare === 0) {
        var dist = distance * distance_value;
        var dura = (duration / 60) * duration_rate;
        var distIni = (dist - 0) + (dura - 0) + (initial_value - 0);
        var total_rate = 100 + (tax_rate - 0);
        fare = (distIni * total_rate) + (extraFare - 0);
    } else {
        fare = ((fixed_fare-0) + (extraFare-0)) *100;
    }

    return fare.toFixed();
}

function appendNotes(fields) {
    var x = fields.split("label");
    x.splice(0, 1);
    x[1].substring(8).split("\";s:9");
    for (i = 0; i < x.length; i++) {
        var variable = x[i];
        var split = variable.substring(8).split("\";s:9");
        var variable = split[0];
        var valueArr = split[1].split("value");
        var value = valueArr[1].substring(7).split("\";}")[0];
        if (value.length != 0) {
            notesMap.set(variable, value);
        }
    }
}

function appendExtras(extras) {
    var a = extras.split("name");
    a.splice(0, 1);

    for (i = 0; i < a.length; i++) {
        var y = a[i].substring(8).split("\";s:5:");
        var key = y[0];
        var idx = y[1].search("price");
        var arr = y[1].substring(idx);
        var price = arr.split("price\";s:")[1].split(":\"")[1].split("\";")[0];
        var value = y[1].split("quantity\";i:")[1].substring(0, 1);
        extraFares.push(price * value);
        if (key == "Meet & Greet Services") {
            value = "Yes";
        }
        notesMap.set(key, value);
    }
}

function processVehicleClass(vehicleClass) {
    var result = vehicleClass;
    if (vehicleClass.search("economy") != -1) {
        result = "gocar";
    } else if (vehicleClass.search("premium") != -1) {
        result = "premium-gocar";
    } else if (vehicleClass.search("maxi") != -1) {
        result = "maxi";
    }

    if (vehicleClass.search("premium-taxi") != -1) {
        result = "premium-taxi";
    }
    return result;
}

if (!!inputData.result) {
    var map = new Map();
    var result = inputData.result;
    var bookingId = inputData.bookingId;
    var array = result.split(">");
    for (var i = 0; i < array.length; i++) {
        var res = array[i].split("|");
        map.set(res[0], res[1]);
    }
    var status = map.get("chbs_booking_status_id");
    //comment out for testing
    //if (status !=4){
    //return [];
    //}
    var pickupDate = map.get("chbs_pickup_date");
    console.log(pickupDate);
    var pickupTime = map.get("chbs_pickup_time");
    pickupDate = formatDate(pickupDate);
    var pickupDateTime = pickupDate + "T" + pickupTime + ":00";
    var vehicleClass = inputData.vehicleClass;
    vehicleClass = processVehicleClass(vehicleClass);
    var coordinate = map.get("chbs_coordinate");
    var extras = inputData.extras;
    var firstName = map.get("chbs_client_contact_detail_first_name");
    var lastName = map.get("chbs_client_contact_detail_last_name");
    var email = map.get("chbs_client_contact_detail_email_address");
    var phone = map.get("chbs_client_contact_detail_phone_number");
    var distance_value = map.get("chbs_price_distance_value");
    var distance = map.get("chbs_distance");
    var tax_rate = map.get("chbs_price_initial_tax_rate_value");
    var initial_value = map.get("chbs_price_initial_value");
    var fixed_fare = map.get("chbs_price_fixed_value");
    var duration = map.get("chbs_price_hour_value");
    var duration_rate = map.get("chbs_duration");
    var fields = inputData.fields;
    appendExtras(extras);
    var fare = calculateFare(distance, distance_value, tax_rate, initial_value, extraFares, duration, duration_rate, fixed_fare);
    splitPickupAndDest(coordinate);
    appendNotes(fields);
    //append map into notes
    for (var [key, value] of notesMap) {
        notes += key + '= ' + value + "\n";
    }
}
console.log({
    "bookingId": bookingId,
    "first-name": firstName,
    "last-name": lastName,
    "email": email,
    "mobile": phone,
    "pickup-time": pickupDateTime,
    "vehicle-class": vehicleClass,
    "wholesale-price": fare,
    "pickup": pickup,
    "destination": destination,
    "notes": notes
});