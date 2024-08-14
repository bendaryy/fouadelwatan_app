import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Button,
  Alert,
  ScrollView,
} from "react-native";
import Modal from "react-native-modal";
import { SearchBar } from "react-native-elements";
import DropDownPicker from "react-native-dropdown-picker";

function LegalProcedures({ navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [isPaginated, setIspaginated] = useState(false);
  const [number, setNumber] = useState();
  const [search, setSearch] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [newRecord, setNewRecord] = useState({
    company_code: "",
    company_name: "",
    person_name: "",
    situation_id: "",
    legal_service: "",
    situation_status: "",
    data_entry: "",
    updated_by: "",
    job_desc: "",
    start_date: "",
    expected_end_date: "",
    end_date: "",
    date_now: "",
    notes: "",
  });

  // Dropdown picker state
  const [open, setOpen] = useState(false);
  const [companies, setCompanies] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState(null);

  useEffect(() => {
    fetchPosts();
    fetchCompanies(); // Fetch companies for the dropdown
  }, []);

  const fetchPosts = () => {
    setIspaginated(true);
    const apiUrl = `https://fouadelwatan.net/api/legalsit?page=${page}`;
    fetch(apiUrl, {
      headers: {
        AppKey: "31fdhg2334xzewrgfhfdjhrg",
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        const newData = responseJson.data;
        setData((prevData) => [...prevData, ...newData]);
        setPage((prevPage) => prevPage + 1);
        setIspaginated(false);
        setNumber(responseJson.total);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };

  const fetchCompanies = () => {
    // Fetch the list of companies for the dropdown
    const apiUrl = `https://fouadelwatan.net/api/companies`;
    fetch(apiUrl, {
      headers: {
        AppKey: "31fdhg2334xzewrgfhfdjhrg",
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        const companyData = responseJson.map((company) => ({
          label: company.name,
          value: company.id,
        }));
        setCompanies(companyData);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleLoadMore = () => {
    if (!isPaginated) {
      fetchPosts();
    }
  };

  const addNewRecord = () => {
    Alert.alert("New Record", "Record added successfully!");
    setModalVisible(false);
  };

  const handleChangeText = (field, value) => {
    setNewRecord({ ...newRecord, [field]: value });
  };

  const renderFooter = () => {
    return isPaginated ? (
      <View style={{ alignItems: "center", paddingVertical: 16 }}>
        <ActivityIndicator size="large" color="#00204C" />
      </View>
    ) : null;
  };

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#00204C" />
      </View>
    );
  } else {
    return (
      <>
        <View style={styles.headerContainer}>
          <SearchBar
            containerStyle={styles.searchContainer}
            inputContainerStyle={styles.searchInputContainer}
            inputStyle={styles.searchInput}
            clearIcon={{ color: "#333", name: "close", size: 25 }}
            value={search}
            placeholder="البحث بإسم الشركة"
            onChangeText={(text) => setSearch(text)}
          />
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => setModalVisible(true)}
          >
            <Text style={styles.addButtonText}>إضافة إجراء </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.ViewStatus}>
          <Text style={styles.textStatus}>
            {" "}
            العدد الإجمالى للإجراءات : {number}
          </Text>
        </View>

        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          ListFooterComponent={renderFooter}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.5}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.itemStyle} activeOpacity={1}>
              <Text style={styles.text}>
                <Text style={styles.title}> كود الشركة : </Text>
                {item.company_code}
              </Text>
              <Text style={styles.text}>
                <Text style={styles.title}> إسم الشركة : </Text>
                {item.company_name}
              </Text>
              <Text style={styles.text}>
                <Text style={styles.title}> الشخص المسئول من الشركة : </Text>
                {item.person_name}
              </Text>
              <Text style={styles.text}>
                <Text style={styles.title}> رقم ملف المتابعة: </Text>
                {item.situation_id}
              </Text>
              <Text style={styles.text}>
                <Text style={styles.title}>الخدمة: </Text>
                {item.legal_service}
              </Text>
              <Text style={styles.text}>
                <Text style={styles.title}> حالة الإجراء : </Text>
                {item.situation_status}
              </Text>
              <Text style={styles.text}>
                <Text style={styles.title}> مدخل الإجراء : </Text>
                {item.data_entry}
              </Text>
              <Text style={styles.text}>
                <Text style={styles.title}> قام بتعديل الإجراء : </Text>
                {item.updated_by}
              </Text>
              <Text style={styles.text}>
                <Text style={styles.title}>الإجراء : </Text>
                {item.job_desc}
              </Text>
              <Text style={styles.text}>
                <Text style={styles.title}> تاريخ بداية الإجراء : </Text>
                {item.start_date}
              </Text>
              <Text style={styles.text}>
                <Text style={styles.title}>
                  {" "}
                  التاريخ المتوقع لانهاء الإجراء :{" "}
                </Text>
                {item.expected_end_date}
              </Text>
              <Text style={styles.text}>
                <Text style={styles.title}> تاريخ انتهاء الإجراء : </Text>
                {item.end_date}
              </Text>
              <Text style={styles.text}>
                <Text style={styles.title}> تاريخ تسجيل الإجراء : </Text>
                {item.date_now}
              </Text>

              <Text style={styles.text}>
                <Text style={styles.title}> ملاحظات : </Text>
                {item.notes}
              </Text>
            </TouchableOpacity>
          )}
        />

        <Modal
          isVisible={modalVisible}
          onBackdropPress={() => setModalVisible(false)}
          animationIn="slideInUp"
          animationOut="slideOutDown"
          backdropTransitionOutTiming={0}
          style={styles.modalContainer}
        >
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>إضافة إجراء جديد</Text>
            <ScrollView>
              <DropDownPicker
                open={open}
                value={selectedCompany}
                items={companies}
                setOpen={setOpen}
                setValue={setSelectedCompany}
                setItems={setCompanies}
                placeholder="اختر الشركة"
                containerStyle={styles.dropdownContainer}
                style={styles.dropdown}
                dropDownStyle={styles.dropdownPicker}
                searchable={true}
                searchablePlaceholder="بحث..."
                onChangeItem={(item) =>
                  handleChangeText("company_name", item.label)
                }
              />

              <TextInput
                style={styles.TextInput}
                placeholder="الشخص المسئول"
                placeholderTextColor="#777"
                value={newRecord.person_name}
                onChangeText={(text) => handleChangeText("person_name", text)}
              />
              <TextInput
                style={styles.TextInput}
                placeholder="الخدمة"
                placeholderTextColor="#777"
                value={newRecord.legal_service}
                onChangeText={(text) => handleChangeText("legal_service", text)}
              />
              <TextInput
                style={styles.TextInput}
                placeholder="حالة الإجراء"
                placeholderTextColor="#777"
                value={newRecord.situation_status}
                onChangeText={(text) =>
                  handleChangeText("situation_status", text)
                }
              />
              <TextInput
                style={styles.TextInput}
                placeholder="مدخل الإجراء"
                placeholderTextColor="#777"
                value={newRecord.data_entry}
                onChangeText={(text) => handleChangeText("data_entry", text)}
              />
              <TextInput
                style={styles.TextInput}
                placeholder="قام بتعديل الإجراء"
                placeholderTextColor="#777"
                value={newRecord.updated_by}
                onChangeText={(text) => handleChangeText("updated_by", text)}
              />
              <TextInput
                style={styles.TextInput}
                placeholder="وصف الإجراء"
                placeholderTextColor="#777"
                value={newRecord.job_desc}
                onChangeText={(text) => handleChangeText("job_desc", text)}
              />
              <TextInput
                style={styles.TextInput}
                placeholder="تاريخ بداية الإجراء"
                placeholderTextColor="#777"
                value={newRecord.start_date}
                onChangeText={(text) => handleChangeText("start_date", text)}
              />
              <TextInput
                style={styles.TextInput}
                placeholder="التاريخ المتوقع لانهاء الإجراء"
                value={newRecord.expected_end_date}
                placeholderTextColor="#777"
                onChangeText={(text) =>
                  handleChangeText("expected_end_date", text)
                }
              />
              <TextInput
                style={styles.TextInput}
                placeholder="تاريخ انتهاء الإجراء"
                placeholderTextColor="#777"
                value={newRecord.end_date}
                onChangeText={(text) => handleChangeText("end_date", text)}
              />
              <TextInput
                style={styles.TextInput}
                placeholder="تاريخ تسجيل الإجراء"
                placeholderTextColor="#777"
                value={newRecord.date_now}
                onChangeText={(text) => handleChangeText("date_now", text)}
              />
              <TextInput
                style={styles.TextInput}
                placeholder="ملاحظات"
                placeholderTextColor="#777"
                value={newRecord.notes}
                onChangeText={(text) => handleChangeText("notes", text)}
              />

              <TouchableOpacity style={styles.addButton} onPress={addNewRecord}>
                <Text style={styles.addButtonText}>إضافة</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </Modal>
      </>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "#00204C",
  },
  searchContainer: {
    flex: 1,
    backgroundColor: "transparent",
    borderBottomColor: "transparent",
    borderTopColor: "transparent",
    marginRight: 10,
  },
  searchInputContainer: {
    backgroundColor: "#e0e0e0",
    borderRadius: 20,
  },
  searchInput: {
    color: "#333",
    fontSize: 18,
    textAlign: "right",
    marginRight: 10,
  },
  addButton: {
    backgroundColor: "#FFD700",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  addButtonText: {
    color: "#00204C",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
  itemStyle: {
    paddingTop: 30,
    paddingBottom: 30,
    paddingRight: 3,
    paddingLeft: 3,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00204C",
    color: "white",
  },
  text: {
    color: "white",
    textAlign: "right",
    padding: 15,
    borderWidth: 1,
    borderColor: "white",
    margin: 5,
    fontSize: 13,
    width: "100%",
  },
  ViewStatus: {
    backgroundColor: "#00204C",
    width: "100%",
  },
  textStatus: {
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    padding: 2,
    margin: 5,
    color: "white",
  },
  title: {
    color: "yellow",
    fontWeight: "bold",
  },
  modalContainer: {
    justifyContent: "center",
    margin: 0,
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    marginHorizontal: 20,
  },
  modalTitle: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  TextInput: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    width: "100%",
    backgroundColor: "#ffffff", // Ensure background color is white or contrasting
    color: "#000000", // Ensure text color is black
  },
  dropdownContainer: {
    marginBottom: 10,
    width: "100%",
  },
  dropdown: {
    backgroundColor: "#fafafa",
  },
  dropdownPicker: {
    backgroundColor: "#fafafa",
  },
  modalContainer: {
    justifyContent: "center",
    alignItems: "center",
    margin: 0,
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    width: "90%",
    maxHeight: "80%",
    alignItems: "flex-start", // Align children to the start (left) in LTR and end (right) in RTL
  },
  modalTitle: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: "bold",
    textAlign: "right", // Align title text to the right
    width: "100%",
  },
  dropdownContainer: {
    height: 40,
    width: "100%",
    marginBottom: 10,
  },
  dropdown: {
    backgroundColor: "#fafafa",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
  },
  dropdownPicker: {
    backgroundColor: "#fafafa",
  },
  TextInput: {
    height: 40,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    width: "100%",
    textAlign: "right", // Ensure text is aligned to the right
    color: "#000000", // Ensure text color is black
    placeholderTextColor: "#000000", // Ensure placeholder text color is black
  },
  //   addButton: {
  //     backgroundColor: "#00204C",
  //     paddingVertical: 10,
  //     paddingHorizontal: 20,
  //     borderRadius: 5,
  //     marginTop: 20,
  //   },
  addButtonText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center", // Center the text within the button
  },
});

export default LegalProcedures;
