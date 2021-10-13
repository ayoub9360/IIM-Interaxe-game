<template>
  <div class="main">
    <div class="container-fluid bg-white p-3">
      <div class="row">
        <div class="col-md-12">
          <h2 class="mb-3">MailBox</h2>
        </div>
        <div class="col-md-6 row">
          <div class="col-md-4 row">
            <div class="col-md-12 border-end">
              <button class="btn btn-danger col-12 mb-4">New mail</button>
              <h6>Folders</h6>
              <div class="list-group list-group-flush">
                <a
                  href="#"
                  class="
                    list-group-item list-group-item-action
                    active
                    border-white
                  "
                  aria-current="true"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <p class="mb-1">
                      <font-awesome-icon
                        :icon="['fas', 'envelope']"
                      />&nbsp;Inbox
                    </p>
                    <small
                      ><span class="badge rounded-pill bg-primary"
                        >3</span
                      ></small
                    >
                  </div>
                </a>
                <a
                  href="#"
                  class="list-group-item list-group-item-action border-white"
                  aria-current="true"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <p class="mb-1">
                      <font-awesome-icon
                        :icon="['fas', 'paper-plane']"
                      />&nbsp;Sent
                    </p>
                    <small></small>
                  </div>
                </a>
                <a
                  href="#"
                  class="list-group-item list-group-item-action border-white"
                  aria-current="true"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <p class="mb-1">
                      <font-awesome-icon
                        :icon="['fas', 'star']"
                      />&nbsp;Favories
                    </p>
                    <small></small>
                  </div>
                </a>
                <a
                  href="#"
                  class="list-group-item list-group-item-action border-white"
                  aria-current="true"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <p class="mb-1">
                      <font-awesome-icon :icon="['fas', 'file']" />&nbsp;Draft
                    </p>
                    <small></small>
                  </div>
                </a>
                <a
                  href="#"
                  class="list-group-item list-group-item-action border-white"
                  aria-current="true"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <p class="mb-1">
                      <font-awesome-icon :icon="['fas', 'trash']" />&nbsp;Trash
                    </p>
                    <small></small>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-8 border-end">
            <div class="col-md-12 input-group mb-3">
              <span id="basic-addon1" class="input-group-text">@</span>
              <input type="text" class="form-control" placeholder="Search" />
            </div>
            <div class="col-md-12">
              <h3>Inbox</h3>
            </div>
            <div class="list-group list-group-flush mt-6">
              <a href="#" class="list-group-item list-group-item-action">
                <div class="row d-flex flex-wrap align-items-center">
                  <div class="col-1 align-middle">
                    <img
                      src="https://i.pravatar.cc/35"
                      class="rounded-circle"
                      alt="avatar"
                    />
                  </div>
                  <div class="col-11">
                    <div class="d-flex w-100 justify-content-between">
                      <h6 class="mb-1">
                        <strong>The Killer - ScapeGame</strong>
                      </h6>
                      <small class="text-muted">5 mins</small>
                    </div>
                    <small class="text-muted mb-1">
                      Je retiens ton amis en otage, ahahahahahah!!!!!!
                    </small>
                  </div>
                </div>
              </a>
              <a href="#" class="list-group-item list-group-item-action">
                <div class="row d-flex flex-wrap align-items-center">
                  <div class="col-1 align-middle">
                    <img
                      src="https://i.pravatar.cc/35"
                      class="rounded-circle"
                      alt="avatar"
                    />
                  </div>
                  <div class="col-11">
                    <div class="d-flex w-100 justify-content-between">
                      <h6 class="mb-1">
                        <strong>List group item heading</strong>
                      </h6>
                      <small class="text-muted">1 hour</small>
                    </div>
                    <small class="text-muted mb-1">
                      Some placeholder content in a paragraph.
                    </small>
                  </div>
                </div>
              </a>
              <a href="#" class="list-group-item list-group-item-action">
                <div class="row d-flex flex-wrap align-items-center">
                  <div class="col-1 align-middle">
                    <img
                      src="https://i.pravatar.cc/35"
                      class="rounded-circle"
                      alt="avatar"
                    />
                  </div>
                  <div class="col-11">
                    <div class="d-flex w-100 justify-content-between">
                      <h6 class="mb-1">
                        <strong>List group item heading</strong>
                      </h6>
                      <small class="text-muted">1 hour</small>
                    </div>
                    <small class="text-muted mb-1">
                      Some placeholder content in a paragraph.
                    </small>
                  </div>
                </div>
              </a>
              <a href="#" class="list-group-item list-group-item-action">
                <div class="row d-flex flex-wrap align-items-center">
                  <div class="col-1 align-middle">
                    <img
                      src="https://i.pravatar.cc/35"
                      class="rounded-circle"
                      alt="avatar"
                    />
                  </div>
                  <div class="col-11">
                    <div class="d-flex w-100 justify-content-between">
                      <h6 class="mb-1 text-muted">List group item heading</h6>
                      <small class="text-muted">3 days ago</small>
                    </div>
                    <small class="text-muted mb-1">
                      Some placeholder content in a paragraph.
                    </small>
                  </div>
                </div>
              </a>
              <a href="#" class="list-group-item list-group-item-action">
                <div class="row d-flex flex-wrap align-items-center">
                  <div class="col-1 align-middle">
                    <img
                      src="https://i.pravatar.cc/35"
                      class="rounded-circle"
                      alt="avatar"
                    />
                  </div>
                  <div class="col-11">
                    <div class="d-flex w-100 justify-content-between">
                      <h6 class="mb-1 text-muted">List group item heading</h6>
                      <small class="text-muted">3 days ago</small>
                    </div>
                    <small class="text-muted mb-1">
                      Some placeholder content in a paragraph.
                    </small>
                  </div>
                </div>
              </a>
              <a href="#" class="list-group-item list-group-item-action">
                <div class="row d-flex flex-wrap align-items-center">
                  <div class="col-1 align-middle">
                    <img
                      src="https://i.pravatar.cc/35"
                      class="rounded-circle"
                      alt="avatar"
                    />
                  </div>
                  <div class="col-11">
                    <div class="d-flex w-100 justify-content-between">
                      <h6 class="mb-1 text-muted">List group item heading</h6>
                      <small class="text-muted">3 days ago</small>
                    </div>
                    <small class="text-muted mb-1">
                      Some placeholder content in a paragraph.
                    </small>
                  </div>
                </div>
              </a>
              <a href="#" class="list-group-item list-group-item-action">
                <div class="row d-flex flex-wrap align-items-center">
                  <div class="col-1 align-middle">
                    <img
                      src="https://i.pravatar.cc/35"
                      class="rounded-circle"
                      alt="avatar"
                    />
                  </div>
                  <div class="col-11">
                    <div class="d-flex w-100 justify-content-between">
                      <h6 class="mb-1 text-muted">List group item heading</h6>
                      <small class="text-muted">3 days ago</small>
                    </div>
                    <small class="text-muted mb-1">
                      Some placeholder content in a paragraph.
                    </small>
                  </div>
                </div>
              </a>
              <a href="#" class="list-group-item list-group-item-action">
                <div class="row d-flex flex-wrap align-items-center">
                  <div class="col-1 align-middle">
                    <img
                      src="https://i.pravatar.cc/35"
                      class="rounded-circle"
                      alt="avatar"
                    />
                  </div>
                  <div class="col-11">
                    <div class="d-flex w-100 justify-content-between">
                      <h6 class="mb-1 text-muted">List group item heading</h6>
                      <small class="text-muted">3 days ago</small>
                    </div>
                    <small class="text-muted mb-1">
                      Some placeholder content in a paragraph.
                    </small>
                  </div>
                </div>
              </a>
              <a href="#" class="list-group-item list-group-item-action">
                <div class="row d-flex flex-wrap align-items-center">
                  <div class="col-1 align-middle">
                    <img
                      src="https://i.pravatar.cc/35"
                      class="rounded-circle"
                      alt="avatar"
                    />
                  </div>
                  <div class="col-11">
                    <div class="d-flex w-100 justify-content-between">
                      <h6 class="mb-1 text-muted">List group item heading</h6>
                      <small class="text-muted">3 days ago</small>
                    </div>
                    <small class="text-muted mb-1">
                      Some placeholder content in a paragraph.
                    </small>
                  </div>
                </div>
              </a>
              <a href="#" class="list-group-item list-group-item-action">
                <div class="row d-flex flex-wrap align-items-center">
                  <div class="col-1 align-middle">
                    <img
                      src="https://i.pravatar.cc/35"
                      class="rounded-circle"
                      alt="avatar"
                    />
                  </div>
                  <div class="col-11">
                    <div class="d-flex w-100 justify-content-between">
                      <h6 class="mb-1 text-muted">List group item heading</h6>
                      <small class="text-muted">3 days ago</small>
                    </div>
                    <small class="text-muted mb-1">
                      Some placeholder content in a paragraph.
                    </small>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="mb-3">
            <button class="btn btn-sm btn-dark mr-2">
              <font-awesome-icon :icon="['fas', 'thumbtack']" />
            </button>
            <button class="btn btn-sm btn-dark">
              <font-awesome-icon :icon="['fas', 'envelope-open']" />
            </button>
            <button class="btn btn-sm btn-dark">
              <font-awesome-icon :icon="['fas', 'clock']" />
            </button>
            <button class="btn btn-sm btn-dark">
              <font-awesome-icon :icon="['fas', 'archive']" />
            </button>
            <button class="btn btn-sm btn-danger">
              <font-awesome-icon :icon="['fas', 'trash']" />
            </button>
          </div>
          <div
            class="row d-flex flex-wrap align-items-center mb-2 border-bottom"
          >
            <div class="col-1 align-middle">
              <img
                src="https://i.pravatar.cc/40"
                class="rounded-circle"
                alt="avatar"
              />
            </div>
            <div class="col-11">
              <div class="d-flex w-100 justify-content-between">
                <h6 class="mb-1">The Killer - ScapeGame</h6>
                <small class="text-muted">3 days ago </small>
              </div>
              <div class="float-end">
                <span class="badge bg-dark mb-2"
                  ><font-awesome-icon :icon="['fas', 'reply']"
                /></span>
                <span class="badge bg-dark mb-2"
                  ><font-awesome-icon :icon="['fas', 'arrow-up']"
                /></span>
                <span class="badge bg-dark mb-2"
                  ><font-awesome-icon :icon="['fas', 'bars']"
                /></span>
              </div>
              <small class="text-muted mb-1"> To: Damien FOUYR </small>
            </div>
          </div>
          <div class="text-center">
            <div class="card-body">
              <h5 class="card-title">
                Je retiens ton amis en otage, ahahahahahah!!!!!!
              </h5>
              <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                quis ultricies velit. Etiam quam nulla, placerat ut elit quis,
                commodo sollicitudin ipsum. In facilisis facilisis dapibus.
                Maecenas in gravida odio. In tincidunt mi sed dictum commodo.
              </p>
              <img
                class="rounded mx-auto d-block img-thumbnail mb-3"
                src="https://picsum.photos/300/300/?blur=6"
                alt=""
              />
              <!-- <a href="#" class="btn btn-primary mb-2">Go somewhere</a> -->
              <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                quis ultricies velit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['data'],
}
</script>


<style lang="scss">
@import '@/node_modules/bootstrap/dist/css/bootstrap.css';
.main {
  height: 100%;
  width: 100%;
  border-radius: 0 0 8px 8px;
}
</style>