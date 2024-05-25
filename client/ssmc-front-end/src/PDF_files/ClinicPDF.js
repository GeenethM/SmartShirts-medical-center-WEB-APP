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

const ClinicPDF = (props) => {
    return (
        <Document>
            <Page style={styles.body}>
                <Text style={styles.header} fixed>Clinic report</Text>
                <Text style={styles.text}>EPF number: {props.epf}</Text>
                <Text style={styles.text}>Patient name: {props.name}</Text>
                <Text style={styles.text}>Disease: {props.dis}</Text>
                <Text style={styles.text}>Name of the attending clinic: {props.clinic}</Text>
                <Text style={styles.pageNumber}
                render={({ pageNumber, totalPages }) =>
                `${pageNumber} / ${totalPages}`
            }/>
            </Page>
        </Document>
    );
    
};

export default ClinicPDF;