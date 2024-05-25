import {Page, Text, Document, StyleSheet} from '@react-pdf/renderer'
import React from 'react';

const styles = StyleSheet.create({
    body: {
        paddingTop: 35,
        paddingBottom: 65,
        paddingHorizontal: 35,
      },
      title: {
        fontSize: 24,
        textAlign: "center",
        fontFamily: "Times-Roman",
      },
      text: {
        margin: 12,
        fontSize: 14,
        textAlign: "justify",
        fontFamily: "Times-Roman",
    
      },
      header: {
        fontSize: 12,
        marginBottom: 20,
        textAlign: "center",
        color: "grey",
        fontFamily: "Times-Roman",
      },
      pageNumber: {
        position: "absolute",
        fontSize: 12,
        bottom: 30,
        left: 0,
        right: 0,
        textAlign: "center",
        color: "grey",
        fontFamily: "Times-Roman",
      },
})

const PregentPDF = (props) => {
    return (
        <Document>
            <Page style={styles.body}>
                <Text style={styles.header} fixed>Pregnet women report</Text>
                <Text style={styles.text}>Name of the Mother: {props.name}</Text>
                <Text style={styles.text}>Age of Mother: {props.age}</Text>
                <Text style={styles.text}>Date of 1st Joined: {props.dofj}</Text>
                <Text style={styles.text}>Designation: {props.desig}</Text>
                <Text style={styles.text}>Operation: {props.oper}</Text>
                <Text style={styles.text}>L.R.M.P: {props.lr}</Text>
                <Text style={styles.text}>E.D.D (40 weeks complete): {props.ed}</Text>
                <Text style={styles.text}>Scane Date: {props.sd}</Text>
                <Text style={styles.text}>7 Month Completed Date: {props.secd}</Text>
                <Text style={styles.text}>14 days Start on: {props.fodsd}</Text>
                <Text style={styles.text}>Date of Report after Leave: {props.dor}</Text>
                <Text style={styles.text}>Baby Born Date: {props.bb}</Text>
                <Text style={styles.text}>Emergency Mobile Number: {props.en}</Text>
                <Text style={styles.pageNumber}
                render={({ pageNumber, totalPages }) =>
                `${pageNumber} / ${totalPages}`
            }/>
            </Page>
        </Document>
    );
    
};

export default PregentPDF;