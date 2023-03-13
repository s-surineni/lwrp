import { LightningElement } from "lwc";

export default class HelloWorldApp extends LightningElement {
  hello = "Hello";
  data = {};
  // data =
  attributeCategories = [{ name: 123 }, { name: 5678 }];
  connectedCallback() {
    this.data = {
      apiStatus: {
        httpStatusCode: "HTTP_200",
        messages: [],
        statusCode: "FETCHED_DETAILS_SUCCESSFULLY",
      },
      result: {
        attributeCategories: [
          {
            name: "Build & Make",
            records: [
              {
                attributeCategoryId: "0v3xx000000006TAAQ",
                dataType: "TEXT",
                defaultValue: "Pineapple",
                hidden: false,
                label: "Manufacturer",
              },
              {
                attributeCategoryId: "0v3xx000000006TAAQ",
                dataType: "TEXT",
                defaultValue: "Chile",
                hidden: false,
                label: "Country of Origin",
              },
              {
                attributeCategoryId: "0v3xx000000006TAAQ",
                dataType: "TEXT",
                hidden: false,
                label: "Model",
              },
            ],
          },
          {
            name: "Storage & Capacity",
            records: [
              {
                attributeCategoryId: "0v3xx000000004rAAA",
                attributePickList: {
                  code: "internal_storage",
                  values: [
                    {
                      code: "128",
                      customFields: [],
                      displayValue: "128",
                      isBooleanValue: false,
                      sequence: 0,
                    },
                    {
                      code: "256",
                      customFields: [],
                      displayValue: "256",
                      isBooleanValue: false,
                      sequence: 0,
                    },
                  ],
                },
                dataType: "PICKLIST",
                hidden: false,
                label: "Internal Storage",
              },
              {
                attributeCategoryId: "0v3xx000000004rAAA",
                dataType: "TEXT",
                defaultValue: "A-15 Bionic",
                hidden: false,
                label: "Chip",
              },
            ],
          },
        ],
        attributes: [
          {
            attributeCategoryId: "Uncategorized",
            dataType: "TEXT",
            defaultValue: "black",
            hidden: false,
            label: "color",
          },
          {
            attributeCategoryId: "Uncategorized",
            attributePickList: {
              code: "color",
              values: [
                {
                  code: "color",
                  customFields: [],
                  displayValue: "True",
                  isBooleanValue: false,
                  sequence: 0,
                },
              ],
            },
            dataType: "PICKLIST",
            hidden: false,
            label: "battery",
          },
          {
            attributeCategoryId: "0v3xx000000006TAAQ",
            dataType: "TEXT",
            defaultValue: "Pineapple",
            hidden: false,
            label: "Manufacturer",
          },
          {
            attributeCategoryId: "0v3xx000000006TAAQ",
            dataType: "TEXT",
            defaultValue: "Chile",
            hidden: false,
            label: "Country of Origin",
          },
          {
            attributeCategoryId: "0v3xx000000006TAAQ",
            dataType: "TEXT",
            hidden: false,
            label: "Model",
          },
          {
            attributeCategoryId: "0v3xx000000004rAAA",
            attributePickList: {
              code: "internal_storage",
              values: [
                {
                  code: "128",
                  customFields: [],
                  displayValue: "128",
                  isBooleanValue: false,
                  sequence: 0,
                },
                {
                  code: "256",
                  customFields: [],
                  displayValue: "256",
                  isBooleanValue: false,
                  sequence: 0,
                },
              ],
            },
            dataType: "PICKLIST",
            hidden: false,
            label: "Internal Storage",
          },
          {
            attributeCategoryId: "0v3xx000000004rAAA",
            dataType: "TEXT",
            defaultValue: "A-15 Bionic",
            hidden: false,
            label: "Chip",
          },
        ],
        childProducts: [],
        customFields: [],
        description: "Samsung",
        id: "01txx0000006lGSAAY",
        name: "Samsung Galaxy",
        prices: [
          { price: 200, priceType: "OneTime", uom: "units" },
          {
            frequency: "Monthly",
            price: 200,
            priceType: "Recurring",
            uom: "units",
          },
          {
            frequency: "Weekly",
            price: 200,
            priceType: "Recurring",
            uom: "units",
          },
        ],
      },
    };
    this.attributeCategories = this.data.result.attributeCategories;
  }
  hideSection(event) {
    console.log("ironman event.target ", event.target);
    console.log("ironman event.currentTarget ", event.currentTarget);
    console.log("ironman event.currentTarget.parentNode ", event.currentTarget.parentNode);


    // const header = event.target;
    const header = event.currentTarget.parentNode;
    if (header.classList.contains('slds-is-open')) {
        console.log('ironman kya rey...');
        header.classList.remove('slds-is-open');
        header.classList.add('slds-is-closed');
    } else {
        header.classList.add('slds-is-open');
        header.classList.remove('slds-is-closed');
    }
  }
}
