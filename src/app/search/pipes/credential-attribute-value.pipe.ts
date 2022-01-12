import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'credentialAttributeValue',
})
export class CredentialAttributeValuePipe implements PipeTransform {
  transform(attributes: any[], type: string): any {
    const attribute = attributes.find((attr) => attr.type === type);
    if (!attribute) {
      return;
    }
    return attribute.value;
  }
}
