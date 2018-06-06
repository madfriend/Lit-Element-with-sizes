export function withSizes (mapSizesToProps) {
  return (base) => {
    return class extends base {
      static get properties () {
        return { width: Number, height: Number };
      }

      constructor () {
        super();

        this._ro = new ResizeObserver(entries => {
          for (let entry of entries) {
            const cr = entry.contentRect;

            const props = mapSizesToProps({
              width: cr.width, height: cr.height
            });

            this.width = cr.width;
            this.height = cr.height;

            for (let key in props) {
              this[key] = props[key];
            }
          }
        });
      }

      connectedCallback () {
        super.connectedCallback();
        this._ro.observe(this);
      }

      disconnectedCallback () {
        super.disconnectedCallback();
        this._ro.unobserve(this);
      }
    };
  };
}