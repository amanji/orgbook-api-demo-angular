import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'credentialAttributeTag',
})
export class CredentialAttributeTagPipe implements PipeTransform {
  transform(attributes: any[], type: string): string {
    const attribute = attributes.find((attr) => attr.type === type);
    if (!attribute) {
      return;
    }
    return `category.${attribute.type}.${attribute.value}`;
  }
}
