import { withSizes } from './withSizes';
import { html, LitElement } from '@polymer/lit-element';

const mapSizesToProps = ({ width, height }) => ({
  isMobile: width < 500
});

export class MyElement extends withSizes(mapSizesToProps)(LitElement) {
  static get is () { return 'my-element' };

  static get properties () {
    return { isMobile: Boolean }
  }

  _render (props) {
    return html`
      ${this.styles(props)}

      ${props.isMobile ? this._renderMobile(props) : this._renderDesktop(props)}

      I am ${props.width}&times;${props.height}px
    `;
  }

  _renderMobile (props) {
    return html`This is a <b>mobile</b> view.`;
  }

  _renderDesktop (props) {
    return html`This is a <b>desktop</b> view.`;
  }

  styles (props) {
    return html`
      <style>
      :host {
        display: block;
        padding: 20px;
        font-family: sans-serif;
        font-size: 20px;
        background: ${props.isMobile ? 'papayawhip' : 'rebeccapurple'};
        color: ${props.isMobile ? 'black' : 'white'};
        border-radius: 5px;
        overflow: hidden;
        transition: background-color 300ms ease-in, color 300ms ease-in;
      }
      </style>
    `;
  }
}